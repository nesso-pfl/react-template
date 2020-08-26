import React, { useCallback, useState } from "react";

const errorMessage = {
  HavingFullWidthError: "半角文字で入力してください。",
  IncorrectFormatError: "IPアドレスを正しく入力してください。",
  PrivateIPError: "プライベートIPが入力されています。",
  DuplicatedIPError: "同じIPアドレスが入力されています。",
  Blank: undefined,
  Success: undefined,
};

type ValidationResult = keyof typeof errorMessage;

type ValidationInfo = {
  lineNumber: number;
  result: ValidationResult;
};

type State = {
  textareaValue: string;
  error: ValidationResult;
  submitDisabled: boolean;
  count: number;
};

const IPValidation = () => {
  const [{ textareaValue, error, count, submitDisabled }, setInfo] = useState<
    State
  >({
    textareaValue: "",
    error: "Blank",
    count: 0,
    submitDisabled: true,
  });
  const placeholder =
    "XXX.XXX.XXX.XXX\nXXX.XXX.XXX.XXX\nXXX.XXX.XXX.XXX\nXXX.XXX.XXX.XXX\nXXX.XXX.XXX.XXX";

  const validateIP = useCallback((ip: string, ips: string[]) => {
    const hasFullWidthWord = ip.match(/[１２３４５６７８９０．]/);

    const isCorrectFormat = ip.match(
      /^(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
    );

    const isPrivateIP = () => {
      if (!isCorrectFormat) return false;
      const octets = ip.split(".").map(Number);
      return (
        octets[0] === 10 ||
        (octets[0] === 172 && 16 <= octets[1] && octets[1] <= 31) ||
        (octets[0] === 192 && octets[1] === 168)
      );
    };

    const hasDuplication = ips.filter((ip_) => ip === ip_).length > 1;

    return !ip.length
      ? "Blank"
      : hasFullWidthWord
      ? "HavingFullWidthError"
      : !isCorrectFormat
      ? "IncorrectFormatError"
      : isPrivateIP()
      ? "PrivateIPError"
      : hasDuplication
      ? "DuplicatedIPError"
      : "Success";
  }, []);

  const validateIPs = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const trimmedIPs = e.target.value.split(/[\n\t]/).map((ip) => ip.trim());

      const results: ValidationInfo[] = trimmedIPs.map((ip, index) => ({
        result: validateIP(ip, trimmedIPs),
        lineNumber: index,
      }));

      const error = results.filter((result) =>
        [
          "HavingFullWidthError",
          "IncorrectFormatError",
          "PrivateIPError",
          "DuplicatedIPError",
        ].includes(result.result)
      )[0];

      setInfo({
        textareaValue: trimmedIPs.join("\n"),
        error: error?.result,
        count: results.filter((result) => result.result === "Success").length,
        submitDisabled: !!error,
      });
      // カーソル位置の調整
      if (error) {
        const cursorPosition =
          trimmedIPs
            .slice(0, error.lineNumber)
            .reduce((accum, ip) => accum + ip.length, 0) + error.lineNumber;
        e.target.setSelectionRange(cursorPosition, cursorPosition);
      }
    },
    [validateIP]
  );

  const submit = useCallback(() => {
    console.log(textareaValue);
  }, [textareaValue]);

  return (
    <React.Fragment>
      <div
        className="error-message-area"
        style={{
          border: "1px solid gray",
          height: "3rem",
          padding: ".5rem",
          width: "50%",
          marginBottom: "5vh",
        }}
      >
        <div>エラーメッセージエリア</div>
        <span>{errorMessage[error]}</span>
      </div>
      <div
        className="ip-count-area"
        style={{
          border: "1px solid gray",
          height: "3rem",
          padding: ".5rem",
          width: "50%",
          marginBottom: "5vh",
        }}
      >
        <span>登録中のIPアドレスは{count}個です</span>
      </div>
      <div className="form-area">
        <textarea
          value={textareaValue}
          placeholder={placeholder}
          onChange={validateIPs}
          style={{ width: "30rem", height: "15rem", padding: ".5rem" }}
        />
        <button disabled={submitDisabled} onClick={submit}>
          submit
        </button>
      </div>
    </React.Fragment>
  );
};

export default IPValidation;

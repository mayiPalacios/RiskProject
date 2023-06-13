import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [typeD, setTipeD] = useState("");
  const [dataText, setDataText] = useState("");
  const [delimiter, setDelimiter] = useState("");
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [fileDownload, setFileDownload] = useState(null);
  const [key, setKey] = useState("");
  const [caseD, setcaseD] = useState("");
  const [docu, setdocu] = useState(null);
  const handleDocumentType = (event) => {
    if (event.target.value !== "txt to xml") {
      setTipeD(event.target.value);
      setcaseD(event.target.value);
    } else {
      setTipeD(".txt");
      setcaseD("txt to xml");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setdocu(file);
  };

  const handleDelimiter = (event) => {
    setDelimiter(event.target.value);
  };

  const handleKey = (event) => {
    setKey(event.target.value);
  };

  const fetchDocument = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      let response;
      if (key === "" || delimiter === "") {
        setIsFieldEmpty(true);
        return;
      }
      setIsFieldEmpty(false);
      switch (caseD) {
        case "txt to xml":
          formData.append("file", docu);
          formData.append("privateKey", key);

          response = await axios.post(
            `http://localhost:8080/convert_txt_to_xml/${delimiter}`,
            formData, 
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
            }
          );

          setDataText(response.data);
          setFileDownload(
            new Blob([response.data], { type: "application/xml" })
          );
          break;

        case ".txt":
          formData.append("file", docu);
          formData.append("privateKey", key);

          response = await axios.post(
            `http://localhost:8080/convert_txt_to_json/${delimiter}`,
            formData, 
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
            }
          );

          setDataText(JSON.stringify(response.data));
          setFileDownload(
            new Blob([JSON.stringify(response.data)], {
              type: "application/json",
            })
          );

          break;
        case ".XML":
          formData.append("file", docu);
          formData.append("publicKey", key);
          response = await axios.post(
            `http://localhost:8080/convert_xml_to_txt/${delimiter}`,
            formData, 
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
            }
          );
          setDataText(response.data);
          setFileDownload(new Blob([response.data], { type: "text/plain" }));
          break;

        case ".json":
          formData.append("file", docu);
          formData.append("publicKey", key);
          response = await axios.post(
            `http://localhost:8080/convert_json_to_txt/${delimiter}`,
            formData, 
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
            }
          );
          setDataText(response.data);
          setFileDownload(new Blob([response.data], { type: "text/plain" }));
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("error :(", error);
      console.log("Error response:", error.response);
    }
  };

  const handleDownload = () => {
    console.log(fileDownload);
    const url = URL.createObjectURL(fileDownload);
    const link = document.createElement("a");
    link.href = url;
    link.download = "file to download";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="card">
        <form action="" name="rgForm" id="form" className="form ">
          <div className="flex-inputs">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="input-name"
                className="form-input"
                placeholder=" "
                onChange={handleDelimiter}
              />
              <label for="" className="form-label">
                Delimiter symbol
              </label>
              <span className="form-line"></span>
              <p
                className={`alert-input-last ${
                  isFieldEmpty ? "" : "alert-input"
                }  `}
              >
                This section is mandatory
              </p>
            </div>
          </div>
          <div className="flex-inputs mt-1">
            <div className="form-group">
              {/* <input
                type="text"
                className="form-input"
                name="last-name"
                id="last-name"
                placeholder=" "
                onChange={handleKey}
              /> */}
              <textarea
                name="last-name"
                id="last-name"
                cols="30"
                rows="10"
                className="form-input"
                placeholder=" "
                onChange={handleKey}
              ></textarea>
              <label for="" className="form-label">
                Encryption / Decryption key
              </label>
              <span className="form-line"></span>
              <p
                className={`alert-input-last ${
                  isFieldEmpty ? "" : "alert-input"
                }  `}
              >
                This section is mandatory
              </p>
            </div>
          </div>

          <div className="sidebar-box mt-1">
            <select
              className="styled-select"
              id="select-exp"
              onChange={handleDocumentType}
            >
              <option value="">document type</option>
              <option value=".txt">text to JSON</option>
              <option value="txt to xml">text to XML</option>
              <option value=".XML">XML to txt</option>
              <option value=".json">JSON to txt</option>
            </select>
          </div>

          {typeD !== "" ? (
            <div className="flex-fileDocument">
              <div className="form-group">
                <input type="file" accept={typeD} onChange={handleFileChange} />
                <span className="form-line"></span>
                <p
                  className={`alert-input-last ${
                    isFieldEmpty ? "" : "alert-input"
                  }  `}
                >
                  This section is mandatory
                </p>
              </div>

              <div className="form-group">
                <button onClick={handleDownload}>Download</button>
              </div>
            </div>
          ) : (
            ""
          )}

          <button onClick={fetchDocument} id="save-reg">
            Save
          </button>
        </form>
      </div>
      <div className="show__convert--doc-container">
        <pre className="show__convert--doc">{dataText}</pre>
      </div>
    </div>
  );
};
export default Form;

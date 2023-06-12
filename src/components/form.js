import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
  const [typeD, setTipeD] = useState("");
  const [dataText, setDataText] = useState("");
  const [txtD, setTxt] = useState(null);
  const handleDocumentType = (event) => {
    setTipeD(event.target.value);
  };

  const handleFileChange = (event) => {
    switch (typeD) {
      case ".txt":
        const file = event.target.files[0];
        setTxt(file);

        break;

      case ".XML":
        break;

      case ".json":
        break;

      default:
        break;
    }
  };
  /*
  useEffect(() => {
   
    fetchCharacter();
  }, [txtD]);*/

  const fetchDocument = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("file", txtD);

      const response = await axios.post(
        "http://localhost:3000/convert_txt_to_xml",
        formData
      );

      setDataText(response.data);
    } catch (error) {
      console.error("error :(", error);
      console.log("Error response:", error.response);
    }
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
              />
              <label for="" className="form-label">
                Delimiter symbol
              </label>
              <span className="form-line"></span>
              <p className="alert-input alert-input-name">
                This section is mandatory
              </p>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-input"
                name="last-name"
                id="last-name"
                placeholder=" "
              />
              <label for="" className="form-label">
                Encryption key
              </label>
              <span className="form-line"></span>
              <p className="alert-input alert-input-last">
                This section is mandatory
              </p>
            </div>
          </div>
          <div className="sidebar-box">
            <select
              className="styled-select"
              id="select-exp"
              onChange={handleDocumentType}
            >
              <option value="">document type</option>
              <option value=".txt">text to JSON</option>
              <option value=".txt">text to XML</option>
              <option value=".XML">XML to JSON</option>
              <option value=".json">JSON to XML</option>
            </select>
          </div>

          <div className="form-group">
            <input type="file" accept={typeD} onChange={handleFileChange} />
          </div>

          <button onClick={fetchDocument} id="save-reg">
            Save
          </button>
        </form>
      </div>
      <div className="show__convert--doc">
        <pre>{dataText}</pre>
      </div>
    </div>
  );
};
export default Form;

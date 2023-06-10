import { useState } from "react";

const Form = () => {
  const [typeD, setTipeD] = useState("");
  const [data, setData] = useState(null);
  const [selectedFiled, setSelected] = useState(null);
  const handleDocumentType = (event) => {
    setTipeD(event.target.value);
  };

  const hanldeFile = (event) => {
    const file = event.target.files[0];
    setSelected(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setData(content);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div className="card">
        <form action="" name="rgForm" id="form" className="form ">
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
            <input type="file" accept={typeD} onChange={hanldeFile} />
          </div>

          <button id="save-reg">Save</button>
        </form>
      </div>
    </div>
  );
};
export default Form;

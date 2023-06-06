

const Form = () =>{

return(
    <div>
         <div className="card">
        <form action="" name="rgForm" id="form" className="form">
          <div className="flex-inputs">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="input-name"
                className="form-input"
                placeholder=" "
              />
              <label for="" className="form-label">Name</label>
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
              <label for="" className="form-label">Last Name</label>
              <span className="form-line"></span>
              <p className="alert-input alert-input-last">
                This section is mandatory
              </p>
            </div>
          </div>

          <div className="flex-inputs">
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                name="em-password"
                id="em-password"
                placeholder=" "
              />
              <label for="" className="form-label">Email Password</label>
              <span className="form-line"></span>
              <p className="alert-input alert-input-Em">
                This section is mandatory
              </p>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-input"
                name="pass-confirm"
                id="pass-confirm"
                placeholder=" "
              />
              <label for="" className="form-label label-confirm"
                >Password Confirmation</label
              >
              <span className="form-line"></span>
              <p className="alert-input alert-input-repeat">
                This section is mandatory
              </p>
              <p className="alert-input alert-input-confirm">different passwords</p>
            </div>
          </div>

          <div className="flex-inputs">
            <div className="form-group">
              <input
                type="tel"
                className="form-input"
                name="phone"
                id="phone"
                placeholder=" "
              />
              <label for="" className="form-label">Phone</label>
              <span className="form-line"></span>
              <p className="alert-input alert-input-phone">
                This section is mandatory
              </p>
              <p className="alert-input alert-input-phone-value">Invalid number</p>
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-input"
                id="age"
                name="age"
                placeholder=" "
                min="1"
                max="120"
              />
              <label for="" className="form-label">Age</label>
              <span className="form-line"></span>
              <p className="alert-input alert-input-age">
                This section is mandatory
              </p>
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="web-url"
              id="web-url"
              placeholder=" "
            />
            <label for="" className="form-label">Website URL</label>
            <span className="form-line"></span>
            <p className="alert-input alert-input-url">This section is mandatory</p>
            <p className="alert-input alert-input-url-val">Invalid Url</p>
          </div>

          <div className="sidebar-box">
            <select className="styled-select" id="select-exp">
              <option value="">Selecciona una opción</option>
              <option value="Junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <button id="save-reg">Save</button>
        </form>
    </div>
    </div>
);

};
export default Form;
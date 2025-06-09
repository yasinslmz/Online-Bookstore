import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [registerData, setRegisterData] = useState({
    id:0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userName:'',
    password: '',
    agreeTerms: false,
    billings:[]
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', registerData);
    const url = "https://localhost:7247/api/Login/Register";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
    })
        .then(response => {
            if (!response.ok) {
                // window.location.reload();
            }
            navigate('/');
        })
        
        .catch(error => console.error("Hata meydana geldi:", error));

    // TODO: Kayıt işlemi veya başka bir işlem
  };

  return (
    <div>
      <div className="user-login-area mb-70 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-title text-center mb-30">
                <h2>Sign Up</h2>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-8 col-md-12 col-12">
              <div className="billing-fields">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-register">
                      <form onSubmit={handleFormSubmit}>
                        <label>
                          First Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={registerData.firstName}
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-register">
                      <form onSubmit={handleFormSubmit}>
                        <label>
                          Last Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={registerData.lastName}
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-register">
                      <form onSubmit={handleFormSubmit}>
                        <label>
                          Email Address<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={registerData.email}
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-register">
                      <form onSubmit={handleFormSubmit}>
                        <label>
                          Username<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="userName"
                          value={registerData.userName}
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-register">
                      <form onSubmit={handleFormSubmit}>
                        <label>
                          Phone<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={registerData.phone}
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="single-register">
                  <form onSubmit={handleFormSubmit}>
                    <label>
                      Account password<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={registerData.password}
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
                <div className="single-register single-register-3">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    name="agreeTerms"
                    value={registerData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <label className="inline">
                    I agree <a href="#">Terms &amp; Condition</a>
                  </label>
                </div>
                <div className="single-register">
                  <button className='btn btn-success' type="submit" onClick={handleFormSubmit}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


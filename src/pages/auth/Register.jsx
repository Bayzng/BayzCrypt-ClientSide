import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import register from '../../assets/registerImg.gif'

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const { password} = formData;

  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const error = <FaTimes color="red" size={15} />;
  const success = <BsCheck2All color="green" size={25} />;

  const switchIcon = (condition) => {
    if (condition) {
      return success;
    } else {
      return error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    //check lower and upper case

    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }
    //check for number

    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    //check for special characters

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }
    //check for password length

    if (password.length > 5) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [ clear, setClear ] = useState("")
  const [ clearTwo, setClearTwo ] = useState("")
  const [ clearThree, setClearThree ] = useState("")

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    setClear("")
    setClearTwo("")
    // setClearThree("")

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            
          } catch (errr) {
          }
        });
      });

       

    } catch (err) {
      setErr(true);
      setLoading(false);
    }

    if (setLoading) {
      navigate('/RegSuccess')
    }
  };

  

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={clear} onChange={(e) => setClear(e.target.value)} required name="name" />
            <input type="email" placeholder="Email" value={clearTwo} onChange={(e) => setClearTwo(e.target.value)} required name="email" />
            <PasswordInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
            <label htmlFor="profile" style={{fontSize: '15px', color: 'green'}}>Add Profile Picture</label> <br />
            <input required style={{marginTop: '10px', marginBottom: '10px' }} type="file" id="file" /> 

            {/* Password Strength indicator */}

            <Card cardClass={styles.group}>
              <ol className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(upperCase)}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(number)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(specialCharacter)}
                    &nbsp; special character (!&@#$*^%)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(passwordLength)}
                    &nbsp; At least 6 character
                  </span>
                </li>
              </ol>
            </Card>

            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
            {/* {loading && "Registration Successfull"} */}
            {loading && <h3 style={{color: 'blue', fontSize: '15px', marginTop: '10px'}}>loading...</h3>}
          </form>
          <span style={{display: 'flex', marginTop: '15px'}}>
            <p> &nbsp;Already have an Account? &nbsp;</p>
            <h3 style={{marginTop: '-10px'}}><Link to="/login">Login</Link></h3>
          </span>
        </div>
      </Card>

      <div className={styles.reg}>
        <img src={register} alt="" />
      </div>

    </div>
  );
};

export default Register;

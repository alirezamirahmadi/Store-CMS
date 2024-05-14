import { useState, useEffect } from "react";
import { Typography, useTheme, TextField, Button } from "@mui/material";
// import { useCookies } from "react-cookie";
// import { useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from '../../Redux/Store';

import Snack from "../../components/global/snack/Snack";
import regex from "../../utils/Regex";
import { ValidateRegex } from "../../utils/Functions";
// import { postLogin, getLogin } from "../../Redux/Reducer/LoginReucer";
import OTPInput from "../../components/CustomizedComponent/otpInput/OTPInput";
// import { useUser, useMutationUser } from "../../Hooks/UserHook";

export default function Login({ closeDrawer }: { closeDrawer?: () => void }): React.JSX.Element {

  // const dispatch = useDispatch<AppDispatch>();
  // const loginInfo = useSelector((state: RootState) => state.login);
  const theme = useTheme();
  const [phone, setPhone] = useState<string>('');
  // const { data: userInfo } = useUser(phone);
  // const { mutate: addUser } = useMutationUser("POST");
  // const [, setCookie,] = useCookies(['token']);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [showSnack, setShowSnack] = useState<boolean>(false);
  const [contextSnack, setContextSnack] = useState<string>('');
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const [oneTimePassword, setOneTimePassword] = useState<string>('');

  const loginHandler = () => {
    if (!ValidateRegex(phone, regex.phone)) {
      showMessage('The phone number entered is incorrect');
      return;
    }
    // userInfo?.length > 0 ? setSendMessage(true) : showMessage('You are not registered yet');
  }

  const showMessage = (message: string) => {
    setContextSnack(message);
    setShowSnack(true);
  }

  const verifyOneTimePassword = () => {
    // if (oneTimePassword === '11111') {
    //   dispatch(postLogin(userInfo[0])).then(() => {
    //     dispatch(getLogin(userInfo[0]?.phone ?? '0'));
    //   })
    //   setCookie('token', userInfo[0]?.phone ?? '0');
    //   closeDrawer && closeDrawer();
    // }
  }

  const registerHandler = () => {
    if (!ValidateRegex(phone, regex.phone) || !ValidateRegex(firstName, regex.flName) || !ValidateRegex(lastName, regex.flName)) {
      showMessage('The information entered is not correct');
      return;
    }
    // addUser({ id: phone, firstName, lastName, phone });
    closeDrawer && closeDrawer();
  }

  useEffect(() => {
    // send message
  }, [sendMessage])

  return (
    <>
      <div className=" h-screen mx-auto py-12 " style={{ fontFamily: theme.typography.fontFamily }}>
        <div className="text-center">
          <img src="../../public/svg/login/loginIllustration.svg" alt="Login illustration" className="w-52 lg:w-96 mx-auto mt-4 lg:mt-8 mb-8 lg:mb-16"/>
        </div>
        {!sendMessage &&
          <div className="flex flex-wrap justify-center items-center w-full mb-2">
            <Typography variant="body1" >{isRegister ? 'Do you have an account?' : 'Don\'t you have an account?'}</Typography>
            <Button onClick={() => setIsRegister(!isRegister)} >{isRegister ? 'Login' : 'Create Account'}</Button>
          </div>
        }
        <div className={"flex flex-col items-center gap-2 " + (sendMessage && "mt-12")}>
          {sendMessage ?
            <OTPInput separator={<span>-</span>} value={oneTimePassword} onChange={setOneTimePassword} length={5} />
            : <TextField value={phone} size="small" onChange={event => setPhone(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>Phone Number</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(phone, regex.phone)} />
          }
          {!isRegister ?
            <Button variant="contained" onClick={sendMessage ? verifyOneTimePassword : loginHandler} sx={{ mt: 1, mx: 'auto', display: 'block' }}>Next</Button>
            :
            <>
              <TextField value={firstName} size="small" onChange={event => setFirstName(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>First Name</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(firstName, regex.flName)} />
              <TextField value={lastName} size="small" onChange={event => setLastName(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>Last Name</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(lastName, regex.flName)} />
              <Button variant="contained" onClick={registerHandler} sx={{ mt: 1, mx: 'auto', display: 'block' }}>Register</Button>
            </>
          }
        </div>
      </div>
      <Snack context={contextSnack} severity="error" show={showSnack} handleCloseSnack={() => setShowSnack(false)} />
    </>
  )
}
import { useState, useEffect } from "react";
import { Typography, useTheme, TextField, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import type { AppDispatch } from '../../redux/store/Store';

import Snack from "../../components/global/snack/Snack";
import regex from "../../utils/Regex";
import { postLogin, getLogin } from "../../redux/reducers/LoginReducer";
import OTPInput from "../../components/CustomizedComponent/otpInput/OTPInput";
import { useQueryUser } from "../../hooks/UserHook";

export default function Login({ closeDrawer }: { closeDrawer?: () => void }): React.JSX.Element {

  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: {
      phone: '',
      firstName: '',
      lastName: ''
    }
  });
  
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const { data: userInfo } = useQueryUser(getValues('phone'));
  const [, setCookie,] = useCookies(['token']);
  const [showSnack, setShowSnack] = useState<boolean>(false);
  const [contextSnack, setContextSnack] = useState<string>('');
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const [oneTimePassword, setOneTimePassword] = useState<string>('');

  const loginHandler = () => {
    userInfo?.length > 0 ? setSendMessage(true) : showMessage('You are not registered yet');
  }

  const showMessage = (message: string) => {
    setContextSnack(message);
    setShowSnack(true);
  }

  const verifyOneTimePassword = () => {
    if (oneTimePassword === '11111') {
      dispatch(postLogin(userInfo[0])).then(() => {
        dispatch(getLogin(userInfo[0]?.phone ?? '0'));
      })
      setCookie('token', userInfo[0]?.phone ?? '0');
      closeDrawer && closeDrawer();
    }
  }

  useEffect(() => {
    // send message
  }, [sendMessage])

  return (
    <>
      <div className=" h-screen mx-auto py-12 " style={{ fontFamily: theme.typography.fontFamily }}>
        <div className="text-center">
          <img src="../../public/svg/login/loginIllustration.svg" alt="Login illustration" className="w-52 lg:w-96 mx-auto mt-4 lg:mt-8 mb-8 lg:mb-16" />
        </div>
        <div className={"flex flex-col items-center gap-2 " + (sendMessage && "mt-12")}>
          {sendMessage ?
            <OTPInput separator={<span>-</span>} value={oneTimePassword} onChange={setOneTimePassword} length={5} />
            : <TextField {...register('phone', { pattern: regex.phone })} size="small" sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>Phone Number</Typography>} variant="outlined" required helperText={errors.phone && 'The phone number is incorrect'} error={errors.phone ? true : false} />
          }
          <Button variant="contained" onClick={sendMessage ? handleSubmit(verifyOneTimePassword) : handleSubmit(loginHandler)} sx={{ mt: 1, mx: 'auto', display: 'block' }}>Next</Button>
        </div>
      </div>
      <Snack context={contextSnack} severity="error" show={showSnack} handleCloseSnack={() => setShowSnack(false)} />
    </>
  )
}
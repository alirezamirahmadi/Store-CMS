import { TextField, Typography, Button, Avatar, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useForm } from 'react-hook-form';

import { CommentType } from "../../../type/CommentType";

export default function CommentModify({ comment }: { comment?: CommentType }): React.JSX.Element {

  const { register, handleSubmit, formState: { errors }, resetField, getValues } = useForm({
    defaultValues: {
      answerContent: '',
      accepted: comment?.isAccepted
    }
  });

  const emptyTextField = () => {
    resetField('answerContent');
    resetField('accepted');
  }

  const submitComment = (data: any) => {
    console.log(data);
    emptyTextField();
  }

  return (
    <>
      <form className="mt-4 max-w-screen-sm">
        <div className="bg-gray-100 rounded-lg">
          <div className="p-4 mb-4">
            <div className="flex gap-4 items-center">
              <Avatar src={comment?.creator.image} />
              <div>
                <p className="text-xl">{comment?.creator.firstName} {comment?.creator.lastName}</p>
                <p className="text-sm">{comment?.date} {comment?.time}</p>
              </div>
            </div>
            <p className="text-base my-4">{comment?.content}</p>
            {
              comment?.answer?.map(answer => (
                <div key={answer.id} className="bg-gray-200 rounded-lg p-4 mt-2">
                  <div className="flex gap-4 items-center">
                    <Avatar src={answer?.creator.image} />
                    <div>
                      <p className="text-lg">{answer?.creator.firstName} {answer?.creator.lastName}</p>
                      <p className="text-xs">{answer?.date} {answer?.time}</p>
                    </div>
                  </div>
                  <p className="text-sm my-4 ms-4">{answer?.content}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="mb-1">
          <TextField {...register('answerContent', { required: true })} error={errors.answerContent ? true : false} helperText={errors.answerContent && 'Answer is required.'} multiline fullWidth rows={4} variant="outlined" label={<Typography variant="body1">Write your answer ...</Typography>} />
          <FormGroup>
            <FormControlLabel control={<Checkbox {...register('accepted')} checked={getValues('accepted')} color="primary" />} label="Accept" />
          </FormGroup>
        </div>
        <Button variant="contained" onClick={handleSubmit(submitComment)} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
      </form>
    </>
  )
}
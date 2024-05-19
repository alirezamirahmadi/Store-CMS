import { useState } from "react";
import { TextField, Typography, Button, Avatar, FormGroup, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { useCookies } from "react-cookie";

import { CommentType } from "../../../type/CommentType";
import { useMutationComment } from "../../../hooks/CommentHook";
import { useQueryUser } from "../../../hooks/UserHook";
import { getDate, getTime } from "../../../utils/Functions";
import Modal from "../../modal/Modal";

export default function CommentModify({ comment, closeModal }: { comment?: CommentType, closeModal?: () => void }): React.JSX.Element {

  const [cookies, ,] = useCookies(['token']);
  const { data: userData } = useQueryUser(cookies.token);
  const { mutate: PutComment } = useMutationComment('PUT');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<CommentType>();
  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({
    defaultValues: {
      answerContent: '',
      accepted: comment?.isAccepted ?? false
    }
  });

  const submitComment = (data: any) => {
    comment && PutComment({ ...comment, answer: [...(comment.answer ?? []), { id: comment.answer ? (comment.answer?.length + 1).toString() : '1', creator: userData[0], content: data.answerContent, date: getDate(), time: getTime(), isAccepted: true }], isAccepted: data.accepted })
    comment && closeModal ? closeModal() : reset();
  }

  const closeLocalModal = () => {
    setShowDeleteModal(false);
  }

  const handleDeleteAnswer = (answer: CommentType) => {
    setSelectedAnswer(answer);
    setShowDeleteModal(true);
  }

  const deleteAnswer = () => {
    comment && PutComment({ ...comment, answer: comment.answer?.filter(answer => answer.id !== selectedAnswer?.id) });
    closeLocalModal();
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
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <Avatar src={answer?.creator.image} />
                      <div>
                        <p className="text-lg">{answer?.creator.firstName} {answer?.creator.lastName}</p>
                        <p className="text-xs">{answer?.date} {answer?.time}</p>
                      </div>
                    </div>
                    <IconButton color="error" onClick={() => handleDeleteAnswer(answer)} title="Delete">
                      <DeleteIcon />
                    </IconButton>
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
        {showDeleteModal && <Modal title="Delete Comment" message={`Are you sure you want to delete "${selectedAnswer?.content}" ?`} buttons={[{ id: '1', title: 'Cancel', variant: 'outlined', onClick: closeLocalModal }, { id: '2', title: 'Delete', color: 'error', onClick: deleteAnswer }]} />}
      </form>
    </>
  )
}
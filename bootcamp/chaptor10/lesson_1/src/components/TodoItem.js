import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions'

function TodoItem(props) {
  const [title, setTitle] = useState(props.item.title);
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch()
  const classList = ["todo-list__item"];

  if(props.item.status){
    classList.push("checked")
  }

  const handleDelete=(e)=>{
    e.stopPropagation();
    dispatch(deleteTodo(props.item.id))
  }
  const handleEditClick=(e)=>{
    e.stopPropagation()
    setEdit(!isEdit)
  }
  const handleEditSubmit = (e)=>{
    e.preventDefault();
    dispatch({
      type: "EDIT_TODO",
      payload:{
        ...props.item,
        title
      }
    })
    setEdit(false)
  }
  const handleChangeStaus = () => {
    dispatch({
      type: "EDIT_TODO",
      payload:{
        ...props.item,
        status: !props.item.status
      }
    })
  }
  const handleEditInput = (e)=>{
    setTitle(e.target.value);
  }
  return (
    <div>
      <li onClick={handleChangeStaus} 
          className={classList.join(" ")}>
          <div>
            {
              isEdit ? (
                <form 
                  className = "edit-form"
                  onClick = {e => e.stopPropagation()}
                  onSubmit = {handleEditSubmit}>
                  <input 
                    className="edit-inp"
                    onChange={handleEditInput}
                    value={title} 
                    type="text" 
                    required
                  />
                  <div>
                    <button 
                      className="edit-form-btn" 
                      type="submit"
                    >Submit</button>
                    <button 
                      className="edit-form-btn"
                      onClick={()=>setEdit(false)} 
                      type="submit"
                    >Cancel</button>
                  </div>
                </form>
              ) : (props.item.title)
            }
          </div>
          <div>
            <button 
              className="btn-edit todo-item__btn"
              onClick={handleEditClick}
              >&#x270E;</button>
            <button 
              className="btn-del todo-item__btn"
              onClick={handleDelete}
            >&#x2716;</button>
          </div>
      </li>
    </div>
  )
}

export default TodoItem

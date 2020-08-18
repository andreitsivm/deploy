import React, {useEffect, useState} from "react";
import {API} from "../../utils/API";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {refreshUsers, startLoading, stopLoading} from "../../redux/actions";
import {setMessage, openModal} from "../../redux/modal-reducer";
import Button from "../../components/Button/Button";
import RadioBtn from "../../components/RadioBtn/RadioBtn";
import UploadForm from "../../components/UploadForm/UploadForm";
import Input from "../../components/Input/Input";
import "./Form.scss"


// eslint-disable next-line
const phoneRegExp = /^[\\+]{0,1}380([0-9]{9})$/;
// eslint-disable next-line
const emailRegExp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;


const Form = () => {


    const dispatch = useDispatch();
    const {loading,trigger} = useSelector(state => {
        return state.app
    })
    const [positions, setPositions] = useState([]);

    const initialState = {
        name: '', email: '', phone: '',
        position_id: '', photo: null
    };

    const [form, setForm] = useState(initialState);

    useEffect(() => {
        API.getPosition().then(data => {
            if (data.success) {
                setPositions(data.positions)
            }
        })

    }, [trigger])

    const registerHandler = () => {
        dispatch(startLoading())
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('position_id', form.position_id);
        formData.append('photo', form.photo);
        dispatch(startLoading())
        API.getToken()
            .then(response => {
                return response.data.token
            })
            .then(token => {
                API.setNewUser(formData, token).then(response => {
                    const data = response.data
                    dispatch(stopLoading())
                    if (data.success) {
                        dispatch(setMessage(data.message))
                        dispatch(openModal())
                        setForm(initialState)
                        dispatch(refreshUsers())
                        dispatch(refreshUsers())
                        setPositions([])
                        dispatch(stopLoading())
                    }
                })

            })

    }
    const handleImageChange = (e) => {
        setForm({...form, photo: e.target.files[0]})

    }
    const formChangeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

    }
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
    })

    return (
        <div className='form__block' id="signup">
            <div>
                <div className="form__title"><h1>Register to get a work</h1></div>
                <div className=" form">
                    <form onSubmit={handleSubmit(registerHandler)}>
                        <div className="form__item">
                            <Input type="text"
                                   name="name"
                                   placeholder="Your name"
                                   value={form.name}
                                   onChange={formChangeHandler}
                                   label="Name"
                                   id="name"
                                   inputRef={register({
                                       required: "Name is required",
                                       minLength: {value: 2, message: "Name should be at least 2 characters"},
                                       maxLength: {value: 60, message: "Name should be at most 60 characters"}})}
                                   errors={errors.name&&errors.name.message}/>

                        </div>
                        <div className="form__item">
                            <Input type="email"
                                   id="email"
                                   name="email"
                                   label="Email"
                                   value={form.email}
                                   onChange={formChangeHandler}
                                   placeholder="Your email"
                                   errors={errors.email&&errors.email.message}
                                   inputRef={register({
                                       required: "Email is required",
                                       minLength: {value: 2, message: "Email should be at least 2 characters"},
                                       maxLength: {value: 100, message: "Email should be at most 100 characters"},
                                       pattern: {value: emailRegExp, message: "Email is not correct"}
                                   })}/>
                        </div>
                        <div className="form__item">
                            <Input type="tel"
                                   id="tel"
                                   label="Phone number"
                                   maxLength={13}
                                   value={form.phone}
                                   name="phone"
                                   onChange={formChangeHandler}
                                   placeholder="+380-XX-XXX-XX-XX"
                                   inputRef={register({
                                       required: "Phone is required",
                                       minLength: {value: 13, message: "Phone number should be 13 symbols"},
                                       maxLength: {value: 13, message: "Phone number should be 13 symbols"},
                                       pattern: {value: phoneRegExp, message: "Phone number is not correct"}
                                   })}
                                   errors={errors.phone&&errors.phone.message}/>
                            <span className="hint">Enter your phone in open format +380-XX-XXX-XX-XX</span>
                        </div>
                        <div className="form__item ">
                            <RadioBtn name="position_id"
                                        inputRef={register({required: "Choose your position"})}
                                      formChangeHandler={formChangeHandler}
                                      positions={positions}
                                      errors={errors.position_id&&errors.position_id.message}
                                        />
                            </div>
                        <div className="form__item">
                            <UploadForm name="photo"
                                        inputRef={register({required: "User photo is required"})}
                                        fileName={!!form.photo ? form.photo.name : ''}
                                        handleImageChange={handleImageChange}
                                        errors={!!errors.photo&&errors.photo.message}/>
                        </div>
                        <div className="div-btn">
                        <Button disabled={loading} type={'submit'}>Sign Up</Button></div>
                    </form>
                </div>
            </div>

        </div>

    )
}
export default Form
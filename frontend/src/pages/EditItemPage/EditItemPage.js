import React, { useEffect, useState } from 'react';
import LoadingButton from '../../components/Loading/LoadingButton/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch';
import { Redirect } from 'react-router';
import { fetchAddItemServices, fetchItemServices } from '../../actions/actions';
import './EditItemPage.css';


function EditItemPage(props) {
    const { match, history } = props;
    const { item, loading, error } = useSelector( state => state.serviceAdd);
    const dispatch = useDispatch();
    const [ value, setValue ] = useState({...item});
    const [ isRedirect, setRedirect ] = useState(false);

    useEffect(() => {
        dispatch(fetchItemServices(match.params.id, (data) => {setValue({...data})}));
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setValue({...item});
    }, [item])

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setValue( prev => ({...prev, [name]: val}));
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchAddItemServices(value, () => setRedirect(!isRedirect)));
    }

    const handleCancel = () => {
        history.goBack();
    }


    return (
        <div className='editing-page'>
            {error && <ErrorFetch error={error}/>}
            <form className='form-editing' onSubmit={handlerSubmit}>
                <div className="editing-block edit-name">
                    <label className='input-label' htmlFor="name">Название</label>
                    <input className='input-field' type="text" name='name' id='name' onChange={handleChange} value={value.name}/>
                </div>
                <div className="editing-block edit-price">
                    <label className='input-label' htmlFor="price">Цена</label>
                    <input className='input-field' type="number" name='price' id='price' onChange={handleChange} value={value.price}/>
                </div>
                <div className="editing-block edit-content">
                    <label className='input-label' htmlFor="content">Описание</label>
                    <input className='input-field' type="text" name='content' id='content' onChange={handleChange} value={value.content}/>
                </div>
                <div className="editing-block editing-block-actions">
                    <button type='button' className="button button-cancel" onClick={handleCancel}>Отмена</button>
                    {!loading && <button className="button button-submit">Сохранить</button>}
                    {loading && <div className="button-loading"><LoadingButton /></div>}
                </div>
            </form>
            {isRedirect && <Redirect to='/' />}
        </div>
    )
}

export default EditItemPage


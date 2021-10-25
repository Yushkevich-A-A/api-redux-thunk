import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../actions/actions';
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loading/Loader';
import './ServicesPage.css';

function ServicesPage(props) {
    const { items, loading, error } = useSelector(state => state.serviceList);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    return (
        <div className='service-page'>
            {loading && <Loader/>}
            {error && <ErrorFetch error={error}/>}
            <ItemList list={items} />
        </div>
    )
}

export default ServicesPage;


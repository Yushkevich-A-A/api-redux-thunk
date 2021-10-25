import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { numberWithSpaces } from '../../../functions/numberWithSpaces';
import { useDispatch } from 'react-redux';
import { fetchServicesDelete } from '../../../actions/actions';
import { Link } from 'react-router-dom';
import LoadingButton from '../../Loading/LoadingButton/LoadingButton';

function Item(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);

    const price = numberWithSpaces(item.price);

    const handleDelete = () => {
        setLoading(true)
        dispatch(fetchServicesDelete(item.id, () => setLoading(false)))
    }

    return (
        <div className='item'>
            <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-price">{price} </div>
            </div>
            <div className="item-actions">

                {!loading && <>
                                <Link to={`/serviсes/${item.id}`}><div className="button-edit"></div></Link>
                                <div className="button-delete" onClick={handleDelete}></div>
                            </>}
                {loading && <div className="button-loading"><LoadingButton/></div>}
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Item;


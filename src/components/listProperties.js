import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import useProperties from '../hooks/useProperties';
import PreviewProperty from './previewProperty';
import * as listProperties from '../css/listProperties.module.css';
import UseFilter from '../hooks/useFilter';

const ListProperties = () => {

    const response = useProperties();
    const [properties] = useState(response);
    const [filterProperties, setFilterProperties] = useState([]);

    const { category, FilterUI } = UseFilter();

    useEffect(() => {
        if(category) {
            const filter = properties.filter(property => property.categories?.name === category);
            setFilterProperties(filter);
        } else {
            setFilterProperties(properties);
        }
    }, [category, properties]);

    return ( 
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Our Properties</h2>

            { FilterUI() }
            <ul className={listProperties.properties}>
                {filterProperties.map(property => (
                    <PreviewProperty 
                        key={property.id}
                        property={property}
                    />
                ))}
            </ul>
        </>
    );
}
 
export default ListProperties;
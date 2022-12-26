import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
    return (
        <Wrapper>
            {SHOES.map((shoe) => (
                <FlexItem>
                    <ShoeCard key={shoe.slug} {...shoe} />
                </FlexItem>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
`;

const FlexItem = styled.div`
    flex: 1 0 312px;
`

export default ShoeGrid;

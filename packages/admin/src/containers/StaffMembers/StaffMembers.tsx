import React, { useCallback, useState } from 'react';
import Moment from 'react-moment';
import { withStyle } from 'baseui';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { Plus } from '../../components/AllSvgIcon';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Wrapper, Header, Heading } from '../../components/WrapperStyle';

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
} from './StaffMembers.style';
import NoResult from '../../components/NoResult/NoResult';

const GET_STUFFS = gql`
  query getStuffs($role: String, $searchBy: String) {
    stuffs(role: $role, searchBy: $searchBy) {
      id
      name
      email
      contact_number
      creation_date
      role
    }
  }
`;

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px)': {
    alignItems: 'center',
  },
}));

const roleSelectOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'member', label: 'Member' },
  { value: 'delivery boy', label: 'Delivery boy' },
];

export default function StuffMembers() {
  const dispatch = useDrawerDispatch();

  const openDrawer = useCallback(
    () =>
      dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'STAFF_MEMBER_FORM' }),
    [dispatch]
  );
  const [role, setRole] = useState([]);
  const [search, setSearch] = useState('');

  const { data, error, refetch } = useQuery(GET_STUFFS);
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  function handleCategory({ value }) {
    setRole(value);
    if (value.length) {
      refetch({ role: value[0].value, searchBy: search });
    } else {
      refetch({
        role: null,
      });
    }
  }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ searchBy: value });
  }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header
            style={{
              marginBottom: 40,
              boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
            }}
          >
            <Col md={3} xs={12}>
              <Heading>Staff Members</Heading>
            </Col>

            <Col md={9} xs={12}>
              <Row>
                <Col md={3} xs={12}>
                  <Select
                    options={roleSelectOptions}
                    labelKey='label'
                    valueKey='value'
                    placeholder='Role'
                    value={role}
                    searchable={false}
                    onChange={handleCategory}
                  />
                </Col>

                <Col md={5} xs={12}>
                  <Input
                    value={search}
                    placeholder='Ex: Quick Search By Name'
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={4} xs={12}>
                  <Button
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: '100%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          borderBottomRightRadius: '3px',
                        }),
                      },
                    }}
                  >
                    Add Members
                  </Button>
                </Col>
              </Row>
            </Col>
          </Header>

          <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
            <TableWrapper>
              <StyledTable $gridTemplateColumns='minmax(70px, 70px) minmax(270px, max-content) minmax(270px, max-content) minmax(150px, max-content) minmax(150px, auto) minmax(150px, auto)'>
                <StyledHeadCell>ID</StyledHeadCell>
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Email</StyledHeadCell>
                <StyledHeadCell>Contact</StyledHeadCell>
                <StyledHeadCell>Joining Date</StyledHeadCell>
                <StyledHeadCell>Role</StyledHeadCell>

                {data ? (
                  data.stuffs.length ? (
                    data.stuffs
                      .map(item => Object.values(item))
                      .map((row, index) => (
                        <React.Fragment key={index}>
                          <StyledBodyCell>{row[0].slice(0, 6)}</StyledBodyCell>
                          <StyledBodyCell>{row[1]}</StyledBodyCell>
                          <StyledBodyCell>{row[2]}</StyledBodyCell>
                          <StyledBodyCell>{row[3]}</StyledBodyCell>
                          <StyledBodyCell>
                            <Moment format='Do MMM YYYY'>{row[4]}</Moment>
                          </StyledBodyCell>
                          <StyledBodyCell>{row[5]}</StyledBodyCell>
                        </React.Fragment>
                      ))
                  ) : (
                    <NoResult
                      hideButton={false}
                      style={{
                        gridColumnStart: '1',
                        gridColumnEnd: 'one',
                      }}
                    />
                  )
                ) : null}
              </StyledTable>
            </TableWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
}

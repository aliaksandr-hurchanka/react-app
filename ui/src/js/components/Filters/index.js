import React from 'react';
import { FormGroup, DropdownButton, MenuItem, Label } from 'react-bootstrap';

const Filters = () => (
    <div>
        <FormGroup>
            <Label>Author</Label>
            <DropdownButton bsSize="small" title={"Default"} id={"dropdown"}>
                <MenuItem eventKey="1">Name1</MenuItem>
                <MenuItem eventKey="2">Name2</MenuItem>
                <MenuItem eventKey="3">Name3</MenuItem>
                <MenuItem eventKey="4">Name4</MenuItem>
            </DropdownButton>
        </FormGroup>
        <FormGroup>
            <Label>Genre</Label>
            <DropdownButton bsSize="small" title={"Default"} id={"dropdown"}>
                <MenuItem eventKey="1">Name1</MenuItem>
                <MenuItem eventKey="2">Name2</MenuItem>
                <MenuItem eventKey="3">Name3</MenuItem>
                <MenuItem eventKey="4">Name4</MenuItem>
            </DropdownButton>
        </FormGroup>
        <FormGroup>
            <Label>Year</Label>
            <DropdownButton bsSize="small" title={"Default"} id={"dropdown"}>
                <MenuItem eventKey="1">Name1</MenuItem>
                <MenuItem eventKey="2">Name2</MenuItem>
                <MenuItem eventKey="3">Name3</MenuItem>
                <MenuItem eventKey="4">Name4</MenuItem>
            </DropdownButton>
        </FormGroup>
    </div>
);

export default Filters;

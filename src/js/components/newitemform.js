import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import TrashIcon from "material-ui/svg-icons/action/delete";
import { deleteItem } from "../actions/actions";


export class NewItemForm extends React.Component{
    handleChangeItem = (event) => {
        const { value } = event.target;
        if (/\d/.test(value)) {
          //Handle error
        }
    
        return this.setState({
          item: value,
        });
    };
  
    return (
      <Table height="320px">
        <TableBody displayRowCheckbox={false}>

            <TableRow key={index}>
              <TableRowColumn>{element.item}</TableRowColumn>
              <TableRowColumn>{element.qty}</TableRowColumn>
              <TableRowColumn>{`$${element.price}`}</TableRowColumn>
              <TableRowColumn>{`$${element.total}`}</TableRowColumn>
              <TableRowColumn style={{ width: 15 }}>
                <TrashIcon
                  style={{ width: 18, height: 18 }}
                  onClick={() => handleRemove(index)}
                  hoverColor="blue"
                />
              </TableRowColumn>
            </TableRow>

        </TableBody>
      </Table>
    );
  };


NewItemForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
  
export default connect()(NewItemForm);
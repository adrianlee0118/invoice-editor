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
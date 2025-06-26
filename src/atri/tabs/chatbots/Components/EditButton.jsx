import Icon from '../../../assets/atri-summary/edit.svg';
import Check from '../../../assets/atri-summary/check.svg';
import { useState } from 'react';

function EditButton({ onClick, isEditing }) {
  return (
    <button className="transparent-button" onClick={onClick}>
      <img src={isEditing ? Check : Icon} alt={isEditing ? "Confirm" : "Edit"} />
    </button>
  );
}

export default EditButton;

import React from 'react';

const ListGroup = (props) => {
  const { listItems, selectedItem, textProperty, valueProperty, onItemSelect } = props;
  return (
    <ul className="list-group">
      {listItems.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          style={{ cursor: 'pointer' }}
          className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;

import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

function DragAndDropItem({item, index, dragItemStyle, children}) {
  return (
    <Draggable
        key={item.id}
        index={index}
        draggableId={item.id}
    >
        {(provided, snapshot) => (
            <div ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
                ...provided.draggableProps.style,
                ...(snapshot.isDragging ? dragItemStyle : {})
            }}
            >
            {children(item)}
            </div>
        )}
    </Draggable>
  )
}

export default DragAndDropItem
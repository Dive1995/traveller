import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import PlaceTimeLine from './../PlaceTimeLine';
import NoteTimeLine from './../NoteTimeLine';
import TodoTimeLine from './../TodoTimeLine';

function DragAndDropItem({item, index, dragItemStyle, children}) {
  return (
    <Draggable
        key={item.id}
        index={index}
        draggableId={item.id.toString()}
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
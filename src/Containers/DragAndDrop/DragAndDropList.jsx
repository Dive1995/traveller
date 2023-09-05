import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DragAndDropItem from './DragAndDropItem';


function DragAndDropList({list, onDragEnd, dragListStyle = {}, children, ...props}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              style={{...(snapshot.isDraggingOver ? dragListStyle : {})}}>
              {list.map((item, index) => (
            <DragAndDropItem key={item.id} item={item} index={index} {...props}>{children}</DragAndDropItem>
          ))}
            </div>
          )}
          </Droppable>
        </DragDropContext>
  )
}

export default DragAndDropList
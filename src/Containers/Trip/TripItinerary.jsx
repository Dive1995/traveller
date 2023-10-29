
function TripItinerary() {

  return (
    <>
      <p>Trip Itenary component</p>
    </>
  )
}

export default TripItinerary








// function generateRandomId(){
//   return Math.floor(100000 + Math.random()*900000).toString();
// }

// function createNewNote(day){
//   const id = generateRandomId();
//   dispatch(addNewNoteToTimeLine({id:id, type: "note"}));
//   dispatch(addIdToItenary({data:{id, type: "note"}, day}));
// }

// function createNewTodo(day){
//   const id = generateRandomId();
//   dispatch(addNewTodoToTimeLine({id:id, type: "todo"}));
//   dispatch(addIdToItenary({data:{id, type: "todo"}, day}));
// }

  // reorder item in the list & updates it
  // const reorder = (list, initialIndex, finalIndex) => {
  //   let result = Array.from(list);
  //   const [removedItem] = result.splice(initialIndex, 1);
  //   result.splice(finalIndex, 0, removedItem);

  //   if(removedItem.type === 'place'){
  //     let order = 0;
  //     const updatedResult = result.map((item) => {
  //       if(item.type === 'place'){
  //         order++;
  //         return {...item, order: order};
  //       }
  //       return item
  //     })
  //     result = updatedResult;
  //   }

  //   return result;
  // }

  // // will be called when an item is dragged and released
  // const handleDragEnd = ({destination, source}) => {
  //   console.log("Source ", source);
  //   console.log("Destination ", destination);
  //   if(!destination) return;

  //   //TODO: use drppableId not index
  //   // const updatedTimeLine = reorder(timeLine, source.index, destination.index);
  //   // setTimeLine(updatedTimeLine);
  //   // dispatch(updateDayTimeLine(updatedTimeLine));
  // }


  // {/* <DragAndDropList 
  //           id={trip.day}
  //           onDragEnd={handleDragEnd} 
  //           list={trip.itenary} 
  //           dragItemStyle={{
  //             background: 'pink',
  //             borderRadius: '16px',
  //           }}
  //           dragListStyle={{
  //             background: 'lightblue',
  //             borderRadius: '16px',
  //           }}>
  //             {
  //               (item) => (
  //                 item.type === "place" ? <PlaceTimeLine place={item} color={trip.color}/> : (item.type === "note" ? <NoteTimeLine color={trip.color}/> : (item.type === "todo" ? <TodoTimeLine todo={item} color={trip.color}/> : null))
  //               )
  //             }
  //           </DragAndDropList> */}

  //           {/* {notes.map(note => <NewNote note={note}/>)} */}

  // <div className='flex gap-2'>
  //             <SearchPlace itenary={trip.itenary} day={trip.day}/>
  //             <Button className='bg-blue-200' icon={<FaStickyNote/>} onClick={() => createNewNote(trip.day)}></Button>
  //             <Button className='bg-blue-200' icon={<FaList/>} onClick={() => createNewTodo(trip.day)}></Button>
  //           </div>
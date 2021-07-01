import List from "@material-ui/core/List";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteItem from "./NoteItem";

import NotePagination from "./NotePagination";

const NoteList = () => {
  const data = useSelector((state) => state.note);
  console.log("-- note state in NoteList Component --");
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_NOTELIST_PAGING" });
  }, [dispatch]);

  return (
    <div>
      <List style={{ height: "40vh", overflowY: "auto" }}>
        {data.content.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </List>
      <NotePagination
        totalElements={data.totalElements}
        page={data.page}
        size={data.size}
      />
    </div>
  );
};

export default NoteList;

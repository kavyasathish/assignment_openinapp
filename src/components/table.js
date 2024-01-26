import React, { useState } from "react";
import "../common/style/table.css";

const Table = () => {
  const [tableData, setTableData] = useState([
    {
      id: "01",
      link: "www.google.com",
      prefix: "QB0GaK7",
      tags: ["Select Tags", "Tag 1", "Tag 2", "Tag 3", "Tag 4"],
      selectedTags: [],
    },
    {
      id: "02",
      link: "timesonline.co.uk",
      prefix: "Z9I2o9o",
      tags: ["Select Tags", "Tag 1", "Tag 2", "Tag 3", "Tag 4"],
      selectedTags: [],
    },
    {
      id: "03",
      link: "newyorker.com",
      prefix: "pW44149",
      tags: ["Select Tags", "Tag 1", "Tag 2", "Tag 3", "Tag 4"],
      selectedTags: [],
    },
    {
      id: "04",
      link: "angelfire.com",
      prefix: "c1TO1x6",
      tags: ["Select Tags", "Tag 1", "Tag 2", "Tag 3", "Tag 4"],
      selectedTags: [],
    },
    {
      id: "05",
      link: "state.gov",
      prefix: "c1TO1x6",
      tags: ["Select Tags", "nh294TY", "Tag 1", "Tag 2", "Tag 3", "Tag 4"],
      selectedTags: [],
    },
  ]);

  const handleTagChange = (id, value) => {
    setTableData((prevTableData) => {
      return prevTableData.map((row) => {
        if (row.id === id) {
          const updatedTags = [...row.selectedTags, value];
          return { ...row, selectedTags: updatedTags };
        }
        return row;
      });
    });
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>SL No</th>
          <th>Links</th>
          <th>Prefix</th>
          <th>Add Tags</th>
          <th>Selected Tags</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.id}</td>
            <td>
              <a href={`http://${row.link}`} className="link">
                {row.link}
              </a>
            </td>
            <td>{row.prefix}</td>
            <td>
              <select
                value={""}
                onChange={(e) => handleTagChange(row.id, e.target.value)}
              >
                {row.tags.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <div className="tag-buttons">
                {row.selectedTags.map((tag, index) => (
                  <button key={index} className="buttonStyle">
                    {tag}
                  </button>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

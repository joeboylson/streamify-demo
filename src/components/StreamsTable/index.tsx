import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import GridItem from "../GridItem";
import { detailsStreamResultQuery } from "../../constants";
import { useCallback, useMemo, useState } from "react";
import { sortBy, filter, isEmpty, debounce } from "lodash";
import { Stream } from "../../types";
import { CaretDown, CaretUp, Dot } from "@phosphor-icons/react";
import styled from "styled-components";

const SearchFilterWrapper = styled.div`
  background-color: ghostwhite;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 4px;

  label {
    font-size: 12px;
    color: #888888;
  }

  .MuiInputBase-root,
  input {
    width: 100%;
  }
`;

const HeaderButton = styled.button`
  align-items: center;
  display: flex;
  white-space: nowrap;
  border: 0;
  background-color: transparent;
  outline: none;
  font-weight: bold;

  &.is-active {
    text-decoration: underline;
  }

  svg {
    padding-left: 4px;
  }
`;

enum StreamsTableHeaders {
  LAST_STREAMED_AT = "Last Streamed At",
  SONG = "Song",
  ARTIST = "Artist",
  TOTAL_USER_STREAMS = "Total User Streams",
  USER_ID = "User ID",
}

interface TableSortingProps {
  sortBy: StreamsTableHeaders;
  reverse: boolean;
}

export default function StreamsTable() {
  const [searchFilter, setSearchFilter] = useState<string>();

  const setSearchFilterDebounced = debounce(setSearchFilter, 300);

  const [sortingProps, setSortingProps] = useState<TableSortingProps>({
    sortBy: StreamsTableHeaders.LAST_STREAMED_AT,
    reverse: true,
  });

  const handleHeaderClick = useCallback(
    /**
     * if selected header is clicked, change sort direction
     */
    (clickedHeader: StreamsTableHeaders) => {
      if (clickedHeader === sortingProps.sortBy) {
        return setSortingProps(({ sortBy, reverse }) => {
          return { sortBy, reverse: !reverse };
        });
      }

      return setSortingProps({ sortBy: clickedHeader, reverse: true });
    },
    [sortingProps]
  );

  const filteredData: Stream[] = useMemo(() => {
    if (!searchFilter || isEmpty(searchFilter)) return detailsStreamResultQuery;
    return filter(detailsStreamResultQuery, (i) => {
      return [i.song.name, i.song.artist.name, i.userId]
        .join("|")
        .toLowerCase()
        .includes(searchFilter);
    });
  }, [searchFilter]);

  const sortedData: Stream[] = useMemo(() => {
    const _sortedData = sortBy(filteredData, [
      function (i) {
        switch (sortingProps.sortBy) {
          case StreamsTableHeaders.LAST_STREAMED_AT:
            return i.date;
          case StreamsTableHeaders.SONG:
            return i.song;
          case StreamsTableHeaders.ARTIST:
            return i.song.artist.name;
          case StreamsTableHeaders.TOTAL_USER_STREAMS:
            return i.count;
          case StreamsTableHeaders.USER_ID:
            return i.userId;
        }
      },
    ]);

    return sortingProps.reverse ? _sortedData.reverse() : _sortedData;
  }, [sortingProps, filteredData]);

  const Icon = useMemo(
    () => (sortingProps.reverse ? CaretDown : CaretUp),
    [sortingProps]
  );

  return (
    <GridItem sizeL={5} sizeM={3}>
      <SearchFilterWrapper>
        <label>Search By Song Name, Artist Name, or User Id:</label>
        <Input onChange={(e) => setSearchFilterDebounced(e.target.value)} />
      </SearchFilterWrapper>

      <Table>
        <TableHead>
          <TableRow>
            {Object.values(StreamsTableHeaders).map((i) => {
              const _onClick = () => handleHeaderClick(i);
              const isActive = i === sortingProps.sortBy;

              return (
                <TableCell>
                  <HeaderButton
                    onClick={_onClick}
                    className={isActive ? "is-active" : ""}
                  >
                    {i}
                    {isActive ? <Icon weight="bold" /> : <Dot />}
                  </HeaderButton>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow
              key={row.userId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.date.toLocaleDateString()}</TableCell>
              <TableCell>{row.song.name}</TableCell>
              <TableCell>{row.song.artist.name}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{row.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </GridItem>
  );
}

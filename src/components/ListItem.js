import styled from "styled-components";
import { ListItemLayout } from "./ListItemLayout";
import { Badge } from "./Badge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const ListItem = ({ data }) => {
  const date = data.state === "open" ? data.created_at : data.closed_at;
  dayjs.extend(relativeTime);
  let newDate = dayjs(date).fromNow();

  return (
    <>
      <ListItemLayout>
        <div>
          <Title role="button">
            {data.title}

            {data.labels.length > 0 &&
              data.labels.map((label, idx) => {
                return (
                  <Badge key={idx} title={label.name} bgColor={label.color} />
                );
              })}
          </Title>
          <Description>{`#${data.number} ${data.state}${
            data.state === "open" ? "ed" : ""
          } ${newDate} by ${data.user.login}`}</Description>
        </div>
      </ListItemLayout>
    </>
  );
};

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    color: #0969da;
  }
`;

const Description = styled.div`
  color: rgb(87, 96, 106);
  font-size: 12px;
`;

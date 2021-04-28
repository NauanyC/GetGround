import * as React from "react";

interface CardsListProps {
  list: any[];
  count: number;
}

const CardsList: React.SFC<CardsListProps> = ({
  list,
  count,
}: CardsListProps) => {
  return <div className="CardsList">I should list stuff. </div>;
};

export default CardsList;

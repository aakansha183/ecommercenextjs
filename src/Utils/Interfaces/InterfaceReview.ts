export interface StyledButtonProps {
    name: string;
    isClicked: boolean;
    onClick: (name: string) => void;
  };
 
  export interface Review {
    id: number;
    name: string;
    rating: number;
    date: string;
    review: string;
  };
  export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
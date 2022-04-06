import makeStyles from '@material-ui/core/styles/makeStyles';
import { useState } from 'react';
import UploadCloudIcon from '/public/icons/upload-cloud.svg';
import CollectionIcon from '/public/icons/collections.svg';
import FeedIcon from '/public/icons/feed.svg';
import AnalyticsIcon from '/public/icons/analytics.svg';
import MessageIcon from '/public/icons/message.svg';
import IpIcon from '/public/icons/ip.svg';
import CartIcon from '/public/icons/cart.svg';
import CalendarIcon from '/public/icons/calendar.svg';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    margin: 0,
    padding: 0,
  },

  item: {
    backgroundColor: '#BDDFEB',
    width: 53,
    height: 43,
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },

    '&:hover, &.active': {
      backgroundColor: '#2B6DAB',

      '& .stroke > path': {
        stroke: '#fff',
      },

      '& .fill > path': {
        fill: '#fff',
      },
    },
  },

  svgStroke: {
    '&:hover > path': {
      stroke: 'red',
    },
  },

  svgFill: {
    '&:hover > path': {
      fill: 'red',
    },
  },
}));

const items = [
  {
    id: 1,
    label: 'Upload',
    type: 'stroke',
    Icon: UploadCloudIcon,
  },
  {
    id: 2,
    label: 'Collections page',
    Icon: CollectionIcon,
  },
  {
    id: 3,
    label: 'Feed',
    Icon: FeedIcon,
  },
  {
    id: 4,
    label: 'Analytics',
    Icon: AnalyticsIcon,
  },
  {
    id: 5,
    label: 'Messaging and Notifications',
    Icon: MessageIcon,
  },
  {
    id: 6,
    label: 'IP Monitor',
    Icon: IpIcon,
  },
  {
    id: 7,
    label: 'Carts',
    Icon: CartIcon,
  },
  {
    id: 8,
    label: 'Calendar and Events',
    Icon: CalendarIcon,
  },
];

export default function ProfileSidebar() {
  const s = useStyles();
  const [selectedId, setSelectedId] = useState(1);

  return (
    <aside>
      <ul className={s.list}>
        {items.map((item) => (
          <Tooltip
            key={item.id}
            placement="left"
            title={item.label}
            aria-label={item.label}
          >
            <li
              className={`${s.item} ${selectedId === item.id ? 'active' : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              {/* <item.Icon className={item.type || 'fill'} /> */}
            </li>
          </Tooltip>
        ))}
      </ul>
    </aside>
  );
}

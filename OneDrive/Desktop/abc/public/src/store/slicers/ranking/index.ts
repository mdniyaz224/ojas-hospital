import { createSlice } from '@reduxjs/toolkit';

export interface ICollegeRankingListProperties {
  name: string;
  state: string;
  conference: string;
}
export interface IClubRankingListProperties {
  clubName: string;
  classYear: string;
  gender: string;
  state: string;
}
export interface IHighSchoolRankingListProperties {
  team: string;
  gender: string;
  state: string;
}

interface IRankingStateProps {
  collegeRankingList?: ICollegeRankingListProperties[];
  clubRankingList?: IClubRankingListProperties[];
  highSchoolRankingList: IHighSchoolRankingListProperties[];
  totalCount: number;
}
const dummyData = [
  {
    name: 'Mad Dog National',
    state: 'AZ',
    conference: 'patriotleague.org/index.aspx?path=wlax',
  },
  {
    name: 'PrimeTime',
    state: 'MD',
    conference: 'pac-12.com/sport/womens-lacrosse',
  },
  {
    name: 'Northwestern',
    state: 'MS',
    conference: 'americaeast.com/index.aspx?path=wlax',
  },
  {
    name: 'North Carolina',
    state: 'OH',
    conference: 'pac-12.com/sport/womens-lacrosse',
  },
  {
    name: 'James Madison',
    state: 'WV',
    conference: 'americaeast.com/index.aspx?path=wlax',
  },
  {
    name: 'James Madison',
    state: 'AZ',
    conference: 'americaeast.com/index.aspx?path=wlax',
  },
  {
    name: 'Notre Dame',
    state: 'MD',
    conference: 'patriotleague.org/index.aspx?path=wlax',
  },
  {
    name: 'Florida',
    state: 'MS',
    conference: 'patriotleague.org/index.aspx?path=wlax',
  },
  {
    name: 'Denver',
    state: 'OH',
    conference: 'americaeast.com/index.aspx?path=wlax',
  },
  {
    name: 'Syracuse',
    state: 'OH',
    conference: 'patriotleague.org/index.aspx?path=wlax',
  },
];
const dummyClubsData = [
  {
    clubName: 'Annapolis Hawks Green',
    classYear: '2023',
    gender: "Boys",
    state: 'AZ',
  },
  {
    clubName: 'Leading Edge Elite',
    classYear: '2024',
    gender: "Boys",
    state: 'MD',
  },
  {
    clubName: 'Cherries Lacrosse',
    classYear: '2022',
    gender: "Boys",
    state: 'MS',
  },
  {
    clubName: 'FCA MD Blue',
    classYear: '2021',
    gender: "Boys",
    state: 'OH',
  },
  {
    clubName: 'Fly Sticking',
    classYear: '2023',
    gender: "Boys",
    state: 'WV',
  },
  {
    clubName: 'LAX Defense',
    classYear: '2020',
    gender: "Boys",
    state: 'AZ',
  },
  {
    clubName: 'Hustle and Helmet Flow',
    classYear: '2019',
    gender: "Boys",
    state: 'MD',
  },
  {
    clubName: 'Shots Fired',
    classYear: '2023',
    gender: "Boys",
    state: 'MS',
  },
  {
    clubName: 'Regional LAXent',
    classYear: '2017',
    gender: "Boys",
    state: 'AZ',
  },
  {
    clubName: 'Fire Falcons',
    classYear: '2015',
    gender: "Boys",
    state: 'OH',
  },
];

const dummyHighSchool = [
  {
    team: 'Darien',
    gender: "Boys",
    state: 'AZ',
  },
  {
    team: 'St Pauls SG',
    gender: "Boys",
    state: 'MD',
  },
  {
    team: 'McDonogh School',
    gender: "Boys",
    state: 'MS',
  },
  {
    team: 'Episcopal Academy',
    gender: "Boys",
    state: 'OH',
  },
  {
    team: 'New Canaan',
    gender: "Boys",
    state: 'WV',
  },
  {
    team: 'American Heritage Delray',
    gender: "Boys",
    state: 'AZ',
  },
  {
    team: 'Summit (Group 2)',
    gender: "Boys",
    state: 'MD',
  },
  {
    team: 'Colorado Academy',
    gender: "Boys",
    state: 'MS',
  },
  {
    team: 'Notre Dame Hingham',
    gender: "Boys",
    state: 'OH',
  },
  {
    team: 'Owen J Roberts',
    gender: "Boys",
    state: 'OH',
  },
];

const initialState: IRankingStateProps = {
  collegeRankingList: dummyData,
  clubRankingList: dummyClubsData,
  highSchoolRankingList: dummyHighSchool,
  totalCount: 10
};

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,

  reducers: {
    getCollegeRankingList: (state, data) => {
      state.collegeRankingList = data?.payload?.records;
    },

  },
});

export const {
  getCollegeRankingList,
} = rankingSlice.actions;
export default rankingSlice.reducer;

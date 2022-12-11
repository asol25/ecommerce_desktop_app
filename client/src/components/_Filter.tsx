import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
	SelectChangeEvent,
} from '@mui/material/Select';
import FilterMock from '../mock/_FilterMock';
import { ICategories } from '../type';
import {
	styled,
	alpha,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(
		theme.palette.common.white,
		0.15
	),
	'&:hover': {
		backgroundColor: alpha(
			theme.palette.common.white,
			0.25
		),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(
	({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	})
);

const StyledInputBase = styled(InputBase)(
	({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	})
);

interface IFilter {
	onRequestSort: (
		event: any,
		property: string
	) => void;
	onFilterUsername: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
}
export default function Filter(props: IFilter) {
	const [age, setAge] = React.useState('');
	const { categories } = FilterMock();

	const handleChange = (
		event: SelectChangeEvent
	) => {
		setAge(event.target.value as string);
	};

	return (
		<>
			<Box
				sx={{
					maxWidth: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					mb: 3,
				}}
			>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{
							'aria-label': 'search',
						}}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => props.onFilterUsername(event)}
					/>
				</Search>
				<FormControl sx={{ minWidth: 300 }}>
					<InputLabel id="demo-simple-select-label">
						Genres
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="Genres"
						onChange={handleChange}
					>
						<MenuItem
							onClick={(event) =>
								props.onRequestSort(event, '')
							}
							value={10}
						>
							None
						</MenuItem>
						{categories.map((category: ICategories) => (
							<MenuItem
								key={category.id}
								onClick={(event) =>
									props.onRequestSort(event, category.name)
								}
								value={category.id}
							>
								{category.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</>
	);
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface ITabProductDetailProps {}

const AntTabs = styled(Tabs)({
	borderBottom: '1px solid #e8e8e8',
	'& .MuiTabs-indicator': {
		backgroundColor: '#1890ff',
	},
});

const AntTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: 'none',
	minWidth: 0,
	[theme.breakpoints.up('sm')]: {
		minWidth: 0,
	},
	fontWeight: theme.typography.fontWeightRegular,
	marginRight: theme.spacing(1),
	color: 'rgba(0, 0, 0, 0.85)',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		color: '#40a9ff',
		opacity: 1,
	},
	'&.Mui-selected': {
		color: '#1890ff',
		fontWeight: theme.typography.fontWeightMedium,
	},
	'&.Mui-focusVisible': {
		backgroundColor: '#d1eaff',
	},
}));

interface StyledTabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (
		event: React.SyntheticEvent,
		newValue: number
	) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		maxWidth: 40,
		width: '100%',
		backgroundColor: '#635ee7',
	},
});

interface StyledTabProps {
	label: string;
}

const TabProductDetail: React.FunctionComponent<
	ITabProductDetailProps
> = (props) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (
		event: React.SyntheticEvent,
		newValue: number
	) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ bgcolor: '#fff' }}>
				<AntTabs
					value={value}
					onChange={handleChange}
					aria-label="ant example"
				>
					<AntTab label="Tab 1" />
					<AntTab label="Tab 2" />
					<AntTab label="Tab 3" />
				</AntTabs>
				<Box sx={{ p: 3 }} />
			</Box>
		</Box>
	);
};

export default TabProductDetail;

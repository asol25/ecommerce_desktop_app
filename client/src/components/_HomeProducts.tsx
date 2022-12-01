import {
	Avatar,
	Box,
	Chip,
	CircularProgress,
	ImageListItem,
	ListItem,
	ListItemAvatar,
	Rating,
	Tab,
	Tabs,
	Typography,
} from '@mui/material';
import * as React from 'react';
import { ICourses } from '../type';
import BreadcrumbsForm from './_Beadcrumbs';
import ApartmentIcon from '@mui/icons-material/Apartment';
import mainLogo from './../assets/getThisSpecialization.png';
import TabPanelCourses from './_TabPanelCourses';
import TabPanelFaq from './_TabPanelFaq';

interface IHomeProductsProps {
	course: ICourses;
}

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

const HomeProducts: React.FunctionComponent<
	IHomeProductsProps
> = (props) => {
	const {
		title,
		description,
		overviews,
		specialization,
		syllabus,
		faq,
	} = props.course;
	const rating =
		props.course.rating?.star;

	const [value, setValue] =
		React.useState(0);

	const handleChange = (
		event: React.SyntheticEvent,
		newValue: number
	) => {
		setValue(newValue);
	};

	return (
		<>
			<section className="section container courses__content">
				<div className="container__background">
					<BreadcrumbsForm
						course={'course'}
						title={'Full Stack'}
					/>

					{props.course.id ? (
						<>
							<div className="courses_home_container">
								<div className="courses_home_container_left">
									<Typography
										fontSize="32px"
										fontWeight={700}
										lineHeight="46px"
										sx={{ mt: 3 }}
									>
										{title}
									</Typography>
									<Typography>
										{description}
									</Typography>
									<ListItem sx={{ gap: '.5em' }}>
										<Rating
											name="simple-controlled"
											value={rating}
										/>
										<Typography>
											ratings
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/305275266_799194314447961_8017194129635247451_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tedGh6IcvEcAX_ETqIX&tn=Vq-3lqRknfxG1Ipw&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfCunI9A4walVJHNLRiZxdPrKZPqY0H4cniGKuz6MoBRnw&oe=638D5FF6"></Avatar>
										</ListItemAvatar>
										<Typography>
											Jogesh K. Muppala
										</Typography>
									</ListItem>

									<button>
										<span>Enroll for Free </span>
										<span>Starts Nov 30</span>
									</button>
								</div>

								<div className="courses_home_container_right">
									<Typography>
										Offered By
									</Typography>
									<ImageListItem>
										<img
											src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/xdp/hkust.svg?auto=format%2Ccompress&dpr=1&h=70"
											alt=""
											loading="lazy"
										/>
									</ImageListItem>
								</div>
							</div>
						</>
					) : (
						<CircularProgress />
					)}
				</div>

				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
				>
					<Tab
						label="About"
						{...a11yProps(0)}
					/>
					<Tab
						label="How It Work"
						{...a11yProps(1)}
					/>
					<Tab
						label="Courses"
						{...a11yProps(2)}
					/>
					<Tab
						label="Instructors"
						{...a11yProps(3)}
					/>
					<Tab
						label="Enrollment Options"
						{...a11yProps(4)}
					/>
					<Tab
						label="FAQ"
						{...a11yProps(5)}
					/>
				</Tabs>

				<TabPanel value={value} index={0}>
					<div className="courses_information">
						<div className="courses_about">
							<h2>About this Course</h2>
							<div
								dangerouslySetInnerHTML={{
									__html: overviews,
								}}
							/>

							<div className="courses_skill">
								<h2>Skills you will gain</h2>
								<div className="skills">
									<Chip label="Authentication" />
									<Chip label="Node.Js" />
									<Chip label="Mongodb" />
									<Chip label="Express.Js" />
								</div>
							</div>
						</div>

						<div className="courses_about_bar">
							<ul>
								<li>
									<div className="icon">
										<ApartmentIcon />
									</div>
									<div className="content">
										<h3>Flexible deadlines</h3>
										<p>
											Reset deadlines in accordance
											to your schedule.
										</p>
									</div>
								</li>

								<li>
									<div className="icon">
										<ApartmentIcon />
									</div>
									<div className="content">
										<h3>Shareable Certificate</h3>
										<p>
											Earn a Certificate upon
											completion
										</p>
									</div>
								</li>

								<li>
									<div className="icon">
										<ApartmentIcon />
									</div>
									<div className="content">
										<h3>100% online</h3>
										<p>
											Start instantly and learn at
											your own schedule
										</p>
									</div>
								</li>

								<li>
									<div className="icon">
										<ApartmentIcon />
									</div>
									<div className="content">
										<h3>Intermediate Level</h3>
									</div>
								</li>

								<li>
									<div className="icon">
										<ApartmentIcon />
									</div>
									<div className="content">
										<h3>
											Approx. 48 hours to complete
										</h3>
									</div>
								</li>

								<li>
									<div className="icon">
										<ApartmentIcon />
									</div>
									<div className="content">
										<h3>English</h3>
										<p>
											Subtitles: Arabic, French,
											Portuguese (European),
											Italian, Vietnamese, German,
											Russian, English, Spanish
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className="courses_how_it_work">
						<h2>
							How the Specialization Works
						</h2>
						<div className="description">
							<div className="content">
								<div
									dangerouslySetInnerHTML={{
										__html:
											specialization?.title as string,
									}}
								/>
							</div>
							<div className="picture">
								<ImageListItem>
									<img
										src={
											specialization?.description
										}
										width="100%"
										height="100%"
										loading="lazy"
									/>
								</ImageListItem>
							</div>
						</div>
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<TabPanelCourses
						syllabus={syllabus}
					/>
				</TabPanel>
				<TabPanel value={value} index={5}>
					<TabPanelFaq faq={faq} />
				</TabPanel>
				<ImageListItem>
					<img
						src={mainLogo}
						width="100%"
						height="100%"
						loading="lazy"
					/>
				</ImageListItem>
			</section>
		</>
	);
};

function TabPanel(
	props: TabPanelProps
) {
	const {
		children,
		value,
		index,
		...other
	} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}
export default HomeProducts;

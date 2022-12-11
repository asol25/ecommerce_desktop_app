import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {
	AccordionProps,
} from '@mui/material/Accordion';
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ISyllabus } from '../type';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { ListItem } from '@mui/material';

interface IArticleProductProps {
	syllabus:
		| ISyllabus[]
		| null
		| undefined;
}
const Accordion = styled(
	(props: AccordionProps) => (
		<MuiAccordion
			disableGutters
			elevation={0}
			square
			{...props}
		/>
	)
)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled(
	(props: AccordionSummaryProps) => (
		<MuiAccordionSummary
			expandIcon={
				<ArrowForwardIosSharpIcon
					sx={{ fontSize: '0.9rem' }}
				/>
			}
			{...props}
		/>
	)
)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded':
		{
			transform: 'rotate(90deg)',
		},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(
	MuiAccordionDetails
)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop:
		'1px solid rgba(0, 0, 0, .125)',
}));

export default function TabPanelCourses(
	props: IArticleProductProps
) {
	const [expanded, setExpanded] =
		React.useState<string | false>(
			'panel1'
		);

	const handleChange =
		(panel: string) =>
		(
			event: React.SyntheticEvent,
			newExpanded: boolean
		) => {
			setExpanded(
				newExpanded ? panel : false
			);
		};

	return (
		<div>
			{props?.syllabus?.map(
				(node: ISyllabus) => {
					return (
						<>
							<Accordion
								expanded={
									expanded === `panel${node.id}`
								}
								onChange={handleChange(
									`panel${node.id}`
								)}
							>
								<AccordionSummary
									aria-controls={`panel${node.id}d-content`}
									id={`panel${node.id}d-header`}
								>
									<Typography>
										{node.title}
									</Typography>

									<Typography>
										{node.paragraphs.length}{' '}
										lectures
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<>
										{node.paragraphs.map(
											(paragraph) => (
												<>
													<ListItem
														sx={{ gap: '.5em' }}
													>
														<PlayCircleIcon />
														<Typography>
															{paragraph}
														</Typography>
													</ListItem>
												</>
											)
										)}
									</>
								</AccordionDetails>
							</Accordion>
						</>
					);
				}
			)}
		</div>
	);
}

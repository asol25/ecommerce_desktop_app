import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IFAQ } from '../type';

interface ITabPanelFaqProps {
	faq: IFAQ[] | undefined;
}
export default function TabPanelFaq(
	props: ITabPanelFaqProps
) {
	console.log(props.faq);

	return (
		<div>
			<h2 className="tittle">
				Frequently Asked Questions
			</h2>
			{props.faq?.map((node: IFAQ) => {
				return (
					<>
						<Accordion key={node.id}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>
									{node.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Answer: {node.description}
								</Typography>
							</AccordionDetails>
						</Accordion>
					</>
				);
			})}
		</div>
	);
}

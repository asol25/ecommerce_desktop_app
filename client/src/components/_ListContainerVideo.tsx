import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import * as apis from '../apis/apis';
import { IVideo } from '../type';
import VideoLive from './_VideoLive';

interface MediaProps {}

function Media(props: MediaProps) {
	const [loading, setLoading] = React.useState(true);
	const [index, setIndex] = React.useState<number>(0);
	const [dataListVideo, setDataListVideo] = React.useState<
		IVideo[]
	>([] as unknown as IVideo[]);

	const handleChangeCurrVideo = (index: number) => {
		setIndex(index);
	};
	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchDataVideos = async () => {
				const courseId = parseInt(
					window.location.search.slice(
						window.location.search.indexOf('=') + 1
					)
				);

				const videos = await apis.products.getVideosByCourseId(
					courseId
				);

				const { data, status } = await videos;

				if (status === 200) {
					setLoading(false);
					setDataListVideo(data);
				}
			};

			fetchDataVideos();
		}

		return () => {
			isChecked = false;
		};
	}, []);
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} md={8} sx={{ my: 5 }}>
					{loading === false ? (
						<VideoLive video={dataListVideo[index]} />
					) : null}
				</Grid>
				<Grid item xs={12} md={4}>
					<Grid container wrap="nowrap">
						{loading === false
							? dataListVideo.map(
									(item: IVideo, index: number) => (
										<Box
											key={index}
											sx={{
												width: 210,
												marginRight: 0.5,
												my: 5,
												cursor: 'pointer',
											}}
											onClick={() => handleChangeCurrVideo(index)}
										>
											{item ? (
												<img
													style={{ width: 210, height: 118 }}
													alt={item.title}
													src={item.thumbanailUrl}
												/>
											) : (
												<Skeleton
													variant="rectangular"
													width={210}
													height={118}
												/>
											)}
											{item ? (
												<Box sx={{ pr: 2 }}>
													<Typography gutterBottom variant="body2">
														{item.title}
													</Typography>
													<Typography
														display="block"
														variant="caption"
														color="text.secondary"
													>
														{item.createdDate}
													</Typography>
													<Typography
														variant="caption"
														color="text.secondary"
													>
														{`${item.id} • ${item.createdDate}`}
													</Typography>
												</Box>
											) : (
												<Box sx={{ pt: 0.5 }}>
													<Skeleton />
													<Skeleton width="60%" />
												</Box>
											)}
										</Box>
									)
							  )
							: null}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default function YouTube() {
	return (
		<Box width="100%">
			<Media />
		</Box>
	);
}

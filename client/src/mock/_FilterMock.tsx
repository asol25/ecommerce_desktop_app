import * as React from 'react';
import { ICategorys } from '../type';
import * as apis from '../apis/apis';

const FilterMock = () => {
    const [categorys, setCategorys] = React.useState<ICategorys[]>([]);

    React.useEffect(() => {
        let isChecked = true;
        if (isChecked) {
            const fetchData = async () => {
                const response = await apis.categorys.find();
                const { data, status } = await response;
                if (status === 200 && data.length > 0) {
                    setCategorys(data);
                }
            };

            fetchData();
        }

        return () => {
            isChecked = false;
        };
    }, []);

    return {
        categorys,
    };
};

export default FilterMock;

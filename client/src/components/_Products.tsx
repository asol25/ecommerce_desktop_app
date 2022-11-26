import React, { ChangeEventHandler } from 'react';
import { ICourses } from '../type';
import ArticleProduct from './_ArticleProduct';
import Filter from './_Filter';

interface IProductsProps {
    products: ICourses[];
}

function Products(props: IProductsProps) {
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('');
    const [searchNameCourse, setSearchCourse] = React.useState('');

    const handleFilterByusername = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchCourse(event.target.value);
    };

    const handleRequestSort = (event: any, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function descendingComparator(a: any, b: any, orderBy: string) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order: string, orderBy: string) {
        return order === 'desc'
            ? (a: any, b: any) => descendingComparator(a, b, orderBy)
            : (a: any, b: any) => -descendingComparator(a, b, orderBy);
    }

    function applySortFilter(
        array: ICourses[],
        comparator: any,
        filter: string,
        search: string
    ) {
        let stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a: any, b: any) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });

        if (filter && filter !== '') {
            stabilizedThis = stabilizedThis.filter(
                (el, index) =>
                    (el[0] as ICourses).category.name.indexOf(filter) !== -1
            );
        }

        if (search) {
            stabilizedThis = stabilizedThis.filter(
                (el, index) =>
                    (el[0] as ICourses).title
                        .toLocaleLowerCase()
                        .indexOf(search.toLocaleLowerCase()) !== -1
            );
        }
        return stabilizedThis.map((el) => el[0]);
    }

    const filterProducts = props.products
        ? applySortFilter(
              props.products,
              getComparator(order, orderBy),
              orderBy,
              searchNameCourse
          )
        : null;

    return (
        <>
            <section className="products section container" id="products">
                <h2 className="section__title">Products</h2>

                <Filter
                    onFilterByusername={handleFilterByusername}
                    onRequestSort={handleRequestSort}
                />
                <div className="products__container grid">
                    {(filterProducts as ICourses[])?.map(
                        (product: ICourses) => (
                            <ArticleProduct
                                key={product.id}
                                product={product}
                            />
                        )
                    )}
                </div>
            </section>
        </>
    );
}
export default Products;

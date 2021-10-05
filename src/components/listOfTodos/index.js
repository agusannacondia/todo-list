import {
    VStack,
    StackDivider,
    Skeleton
} from "@chakra-ui/react";
import PropTypes from 'prop-types'
import Todo from "../todo";

const skeletonList = Array(...Array(10)).map(() => 'test');

const SkeletonTodos = () => (skeletonList.map((_item, index) => <Skeleton height="64px" key={index} speed={0} marginBottom="8"/>))


const ListOfTodos = ({data, loading}) => (
    <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
    >
        {
            loading && <SkeletonTodos />
        }
        {
            !loading && data.map(({title, completed, id}) => <Todo isCompleted={completed} title={title} key={id} />)
        }
    </VStack>
)

ListOfTodos.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        completed: PropTypes.bool,
    })),
    loading: PropTypes.bool,
}

export default ListOfTodos
import TreeSelect, { TreeSelectProps } from 'antd/lib/tree-select';
import icons from '../icons';
import './index.less';

const { DownFilled } = icons;

// const a = typeof TreeNode;
// interface TreeSelectType extends a {
//   // TreeNode: typeof TreeNode;
//   // SHOW_ALL: typeof SHOW_ALL;
//   // SHOW_PARENT: typeof SHOW_PARENT;
//   // SHOW_CHILD: typeof SHOW_CHILD;
// }

// type TreeSelectType  = typeof TreeSelect & {
//   TreeNode: typeof TreeNode;
// };

type TreeSelectProps_Add_Children = TreeSelectProps & { children?: any };
interface TreeSelectType extends React.FC<TreeSelectProps_Add_Children> {
  TreeNode: typeof TreeSelect.TreeNode;
  SHOW_ALL: typeof TreeSelect.SHOW_ALL;
  SHOW_PARENT: typeof TreeSelect.SHOW_PARENT;
  SHOW_CHILD: typeof TreeSelect.SHOW_CHILD;
}
const RKTreeSelect: TreeSelectType = (props) => {
  return (
    <TreeSelect switcherIcon={props.switcherIcon || <DownFilled />} {...props}>
      {props?.children}
    </TreeSelect>
  );
};
RKTreeSelect.TreeNode = TreeSelect.TreeNode;
RKTreeSelect.SHOW_ALL = TreeSelect.SHOW_ALL;
RKTreeSelect.SHOW_PARENT = TreeSelect.SHOW_PARENT;
RKTreeSelect.SHOW_CHILD = TreeSelect.SHOW_CHILD;
export { TreeSelectProps };

export default RKTreeSelect;

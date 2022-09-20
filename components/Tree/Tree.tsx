import Tree, { DataNode, TreeProps } from 'antd/lib/tree';
import * as React from 'react';
import icons from '../icons';
import './index.less';

const { DownFilled } = icons;

interface TreeType extends React.FC<TreeProps> {
  DirectoryTree: typeof Tree.DirectoryTree;
  TreeNode: typeof Tree.TreeNode;
}

const RKTree: TreeType = ({ children, ...props }) => {
  return (
    <Tree switcherIcon={props.switcherIcon || <DownFilled />} {...props}>
      {children}
    </Tree>
  );
};

RKTree.DirectoryTree = Tree.DirectoryTree;
RKTree.TreeNode = Tree.TreeNode;

export { TreeProps, DataNode };

export default RKTree;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IActionContext } from 'vscode-azureextensionui';
import { ext } from '../extensionVariables';
import { ContainerAppTreeItem } from '../tree/ContainerAppTreeItem';

export async function browse(context: IActionContext, node?: ContainerAppTreeItem): Promise<void> {
    if (!node) {
        node = await ext.tree.showTreeItemPicker<ContainerAppTreeItem>(ContainerAppTreeItem.contextValue, context);
    }

    await node.browse();
}
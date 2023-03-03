const Lang = imports.lang;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
var Commands = class {
    constructor(){
        this.commandMenuItem = new PopupMenu.PopupBaseMenuItem({reactive: false, can_focus: false});

        this.addIssueButton = this._createButton('list-add-symbolic');
        this.commandMenuItem.add(this.addIssueButton);
        this.preferencesButton = this._createButton('preferences-system-symbolic');
        this.commandMenuItem.add(this.preferencesButton);

        this.markAllReadButton = this._createButton('edit-clear-all-symbolic');
        this.commandMenuItem.add(this.markAllReadButton);
        this.removeAllButton = this._createButton('list-remove-all-symbolic');
        this.commandMenuItem.add(this.removeAllButton);

        this.refreshButton = this._createButton('view-refresh-symbolic');
        this.commandMenuItem.add(this.refreshButton);
        this.cleanIgnoreListButton = this._createButton('action-unavailable-symbolic');
        this.commandMenuItem.add(this.cleanIgnoreListButton);
    }

    sync() {
    }

    setMinWidth(width){
        this.commandMenuItem.actor.style = 'min-width:' + width + 'px';
    }

    _createButton(icon_name){
        return new St.Button({
            child: new St.Icon({icon_name: icon_name}),
            style_class: 'icon-button',
        });
    }

    destroy(){
        this.commandMenuItem.destroy();
    }

};

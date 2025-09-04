import { Bold, Italic, Strikethrough } from 'lucide-react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import {
	type Editor,
	useEditor,
	EditorContent,
	useEditorState,
} from '@tiptap/react'

export default function JournalForm() {
	const [isDirty, setIsDirty] = useState(false)
	const [initialContent, setInitialContent] = useState('')

	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Hello world</p>',
		onCreate({ editor }) {
			const html = editor.getHTML()
			setInitialContent(html)
		},
		onUpdate({ editor }) {
			const curr = editor.getHTML()
			setIsDirty(curr !== initialContent)
		},
	})

	return (
		<div>
			<div className='h-12 border-b border-[#d8dadd] flex justify-between items-center px-4 sticky top-0 bg-white'>
				<MenuBar editor={editor} />
				{isDirty && <button>Simpan</button>}
			</div>
			<EditorContent editor={editor} />
		</div>
	)
}

function MenuBar({ editor }: { editor: Editor }) {
	const editorState = useEditorState({
		editor,
		selector: (ctx) => {
			return {
				// active states
				isBold: ctx.editor.isActive('bold') ?? false,
				isItalic: ctx.editor.isActive('italic') ?? false,
				isStrike: ctx.editor.isActive('strike') ?? false,

				// capabilities
				canBold: ctx.editor.can().chain().toggleBold().run(),
				canItalic: ctx.editor.can().chain().toggleItalic().run(),
				canStrike: ctx.editor.can().chain().toggleStrike().run(),
			}
		},
	})

	return (
		<div className='flex gap-2'>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editorState.canBold}
				className={editorState.isBold ? 'bg-gray-400' : ''}
			>
				<Bold size={18} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editorState.canItalic}
				className={editorState.isItalic ? 'is-active' : ''}
			>
				<Italic size={18} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editorState.canStrike}
				className={editorState.isStrike ? 'is-active' : ''}
			>
				<Strikethrough size={18} />
			</button>
		</div>
	)
}

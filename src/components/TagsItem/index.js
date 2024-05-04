import {TagsListItem, TagsButton} from './styledComponents'

const TagsItem = props => {
  const {tagsItemDetails, isActive, onClickTag} = props
  const {displayText, optionId} = tagsItemDetails

  return (
    <TagsListItem>
      <TagsButton
        type="button"
        isActive={isActive}
        onClick={onClickTag}
        value={optionId}
      >
        {displayText}
      </TagsButton>
    </TagsListItem>
  )
}

export default TagsItem

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useMediaQuery } from '@material-ui/core';
import { ListSubheader } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { VariableSizeList } from 'react-window';
import Typography from '@material-ui/core/typography';

// THIS IS TAKEN FROM MATERIAL-UI AND ONLY MODIFIED SLIGHTLY;
// THERE IS LIKELY SOME BOILERPLATE THAT CAN BE REMOVED.

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING
    }
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = child => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }
    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={index => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node
};

const useStyles = makeStyles({
  root: {
    marginTop: 5,
    marginBottom: 5,
    width: '100%'
  },
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0
    }
  }
});

const renderGroup = params => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children
];

const SeriesSelect = (props) => {
  const classes = useStyles();

  const options = props.series;

  return (
    <div className={classes.root}>
      <Autocomplete
        disableClearable={true}
        onChange={props.seriesCallback}
        id="virtualize-demo"
        disableListWrap
        classes={classes}
        ListboxComponent={ListboxComponent}
        renderGroup={renderGroup}
        options={options}
        value={props.value}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label={props.title || 'select series'}
          />
        )}
        renderOption={option => <Typography noWrap>{option}</Typography>}
      />
    </div>
  );
}

export {SeriesSelect}